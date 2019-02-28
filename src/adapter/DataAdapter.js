import axios from 'axios';

class DataAdapter {
    constructor(data) {
        this.data = data || {};
        this.releaseList = [];
    }

    transform() {
        if (this.data) {
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

    fetchData(done) {
        axios
            .get(
                'https://raw.githubusercontent.com/nodejs/Release/master/schedule.json'
            )
            .then(response => console.log(response.data))
            .then(data => done(null, data))
            .catch(err => done(err));
    }
}

DataAdapter.data = {
    'v0.10': {
        start: '2013-03-11',
        end: '2016-10-31'
    },
    'v0.12': {
        start: '2015-02-06',
        end: '2016-12-31'
    },
    v4: {
        start: '2015-09-08',
        lts: '2015-10-12',
        maintenance: '2017-04-01',
        end: '2018-04-30',
        codename: 'Argon'
    },
    v5: {
        start: '2015-10-29',
        maintenance: '2016-04-30',
        end: '2016-06-30'
    },
    v6: {
        start: '2016-04-26',
        lts: '2016-10-18',
        maintenance: '2018-04-30',
        end: '2019-04-01',
        codename: 'Boron'
    },
    v7: {
        start: '2016-10-25',
        maintenance: '2017-04-30',
        end: '2017-06-30'
    },
    v8: {
        start: '2017-05-30',
        lts: '2017-10-31',
        maintenance: '2019-01-01',
        end: '2019-12-31',
        codename: 'Carbon'
    },
    v9: {
        start: '2017-10-01',
        maintenance: '2018-04-01',
        end: '2018-06-30'
    },
    v10: {
        start: '2018-04-24',
        lts: '2018-10-30',
        maintenance: '2020-04-01',
        end: '2021-04-01',
        codename: 'Dubnium'
    },
    v11: {
        start: '2018-10-23',
        maintenance: '2019-04-01',
        end: '2019-06-30'
    },
    v12: {
        start: '2019-04-23',
        lts: '2019-10-22',
        maintenance: '2021-04-01',
        end: '2022-04-01',
        codename: ''
    }
};

export default DataAdapter;
//module.exports = DataAdapter;

// const data = {
//     'v0.10': {
//         start: '2013-03-11',
//         end: '2016-10-31'
//     },
//     'v0.12': {
//         start: '2015-02-06',
//         end: '2016-12-31'
//     },
//     v4: {
//         start: '2015-09-08',
//         lts: '2015-10-12',
//         maintenance: '2017-04-01',
//         end: '2018-04-30',
//         codename: 'Argon'
//     },
//     v5: {
//         start: '2015-10-29',
//         maintenance: '2016-04-30',
//         end: '2016-06-30'
//     },
//     v6: {
//         start: '2016-04-26',
//         lts: '2016-10-18',
//         maintenance: '2018-04-30',
//         end: '2019-04-01',
//         codename: 'Boron'
//     },
//     v7: {
//         start: '2016-10-25',
//         maintenance: '2017-04-30',
//         end: '2017-06-30'
//     },
//     v8: {
//         start: '2017-05-30',
//         lts: '2017-10-31',
//         maintenance: '2019-01-01',
//         end: '2019-12-31',
//         codename: 'Carbon'
//     },
//     v9: {
//         start: '2017-10-01',
//         maintenance: '2018-04-01',
//         end: '2018-06-30'
//     },
//     v10: {
//         start: '2018-04-24',
//         lts: '2018-10-30',
//         maintenance: '2020-04-01',
//         end: '2021-04-01',
//         codename: 'Dubnium'
//     },
//     v11: {
//         start: '2018-10-23',
//         maintenance: '2019-04-01',
//         end: '2019-06-30'
//     },
//     v12: {
//         start: '2019-04-23',
//         lts: '2019-10-22',
//         maintenance: '2021-04-01',
//         end: '2022-04-01',
//         codename: ''
//     }
// };

// const a = new DataAdapter(data);
// a.transform();
// console.log(a.getPastList());
// console.log(a.getFutureList());
