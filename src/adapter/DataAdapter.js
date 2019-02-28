import axios from 'axios';
import defaultData from './defaultData';
class DataAdapter {
    constructor(data) {
        this.data = null;
        this.lastUpdated = null;
        this.releaseList = [];
        if (data) {
            // use the explicitly passed data
            this.data = data;
            this.lastUpdated = new Date();
        }
    }

    getData(done) {
        const now = new Date();
        const goBackAWeek = now.setDate(now.getDate() - 7);
        // lets check if we have data fetched already and it is not expired
        if (this.data && this.lastUpdated > goBackAWeek) {
            //this.transform();
            done(null, this.data);
        } else {
            // lets try to get from localstorage
            const storageDataString = localStorage.getItem('LTSData');
            if (storageDataString) {
                const storageData = JSON.parse(storageDataString);
                this.data = storageData.data;
                this.lastUpdated = storageData.date;
                this.transform();
                done(null, this.data);
            } else {
                // lets hit the URL
                this.fetchDataRemote((err, data) => {
                    if (err) {
                        // load default data
                        this.data = defaultData;
                        this.lastUpdated = new Date();
                    } else {
                        this.data = data;
                        this.lastUpdated = new Date();
                    }
                    this.transform();
                    done(null, this.data);
                });
            }
        }
    }

    transform() {
        if (this.data) {
            this.releaseList = [];
            const data = this.data;
            for (let version in this.data) {
                const releaseDate = new Date(`${data[version].start}T00:00:00`);
                const endOfLifeDate = new Date(`${data[version].end}T00:00:00`);
                const now = new Date();
                const row = {
                    version,
                    initialRelease: data[version].start || '-',
                    ltsStart: data[version].lts || '-',
                    ltsEnd: data[version].maintenance || '-',
                    maintenanceStart: data[version].maintenance || '-',
                    maintenanceEnd: data[version].end || '-',
                    endOfLife: data[version].end || '-',
                    future: !(now - releaseDate > 0),
                    past: !(now - endOfLifeDate < 0)
                };
                this.releaseList.push(row);
            }
            this.releaseList.sort((r1, r2) => {
                return r1.initialRelease < r2.initialRelease ? 1 : -1;
            });
        }
    }

    getFullList() {
        return this.releaseList;
    }

    getPastList() {
        return this.releaseList.filter(val => {
            return val.past;
        });
    }

    getCurrentList() {
        return this.releaseList.filter(val => {
            return !val.future && !val.past;
        });
    }

    getFutureList() {
        return this.releaseList.filter(val => {
            return val.future;
        });
    }

    fetchDataRemote(done) {
        axios
            .get(
                'https://raw.githubusercontent.com/nodejs/Release/master/schedule.json'
            )
            .then(response => {
                const data = response.data;
                localStorage.setItem(
                    'LTSData',
                    JSON.stringify({
                        data: data,
                        date: new Date()
                    })
                );
                return done(null, data);
            })
            .catch(err => done(err));
    }
}

export default DataAdapter;
