import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class LeagueDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      owners: [
        {
          id: 1,
          name: 'Bryce Andresen',
          years: ['2011', '2012', '2013', '2014', '2015', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          standings: [
            {
              year: '2011',
              place: 1
            },
            {
              year: '2012',
              place: 1
            },
            {
              year: '2014',
              place: 1
            },
            {
              year: '2015',
              place: 1
            },
            {
              year: '2018',
              place: 1
            },
            {
              year: '2019',
              place: 1
            },
            {
              year: '2020',
              place: 1
            },
            {
              year: '2021',
              place: 1
            },
            {
              year: '2022',
              place: 1
            },
            {
              year: '2023',
              place: 1
            },
            {
              year: '2024',
              place: 1
            }
          ]
        },
        {
          id: 2,
          name: 'Cameron Christopherson',
          years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        {
          id: 3,
          name: 'Nick Perry',
          years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        {
          id: 4,
          name: 'Hayden Blotsky',
          years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        {
          id: 5,
          name: 'Trevor Muth',
          years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        {
          id: 6,
          name: 'Dmitri Tausend',
          years: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023']
        },
        {
          id: 7,
          name: 'Wayne Muth',
          years: []
        },
        {
          id: 8,
          name: 'Dan Perry',
          years: []
        },
        {
          id: 9,
          name: 'Casey Wieland',
          years: []
        },
        {
          id: 10,
          name: 'Payton Schafer',
          years: []
        },
        {
          id: 11,
          name: 'Trever Leingang',
          years: []
        },
        {
          id: 12,
          name: 'Jacob Marschner',
          years: []
        },
        {
          id: 13,
          name: 'Alex Tweet',
          years: []
        },
        {
          id: 14,
          name: 'Matt Ziemann',
          years: []
        },
        {
          id: 16,
          name: 'Jerald Berger',
          years: []
        },
        {
          id: 17,
          name: 'Seth Carlin',
          years: ['2024']
        }
        // TODO: add base owner data with years in league, team names, etc.
      ],
      champions: [
        {
          year: '2011',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2012',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2013',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2014',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2015',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2016',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2017',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2018',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2019',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2020',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2021',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2022',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2023',
          ownerId: 6,
          wins: 1,
          losses: 0
        },
        {
          year: '2024',
          ownerId: 6,
          wins: 1,
          losses: 0
        }
      ],
      scoringChampions: [
        {
          ownerId: 1,
          year: '2011',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2012',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2013',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2014',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2015',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2016',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2017',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2018',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2019',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2020',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2021',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2022',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2023',
          totalPoints: 1000
        },
        {
          ownerId: 1,
          year: '2024',
          totalPoints: 1000
        }
      ]
      // TODD: add league info/milestones/other data independent of owners
      // TODO: add league winners by year
      // TODO: add league standings by year
      // TODO: add league playoff teams by year
      // TODO: add league consolation teams by year
      // TODO: add weekly scores for each team for each year
      // TODO: add weekly matchups for each team for each year
    };
  }
}