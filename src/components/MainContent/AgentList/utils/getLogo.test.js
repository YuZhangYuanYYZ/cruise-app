import { getLogo } from './getLogo';
describe('getLogo', () => {
  test('get centos when input is centos', () => {
    expect(getLogo('centos')).toBe('centos.png');
  });
});

// export function getLogo(os) {
//     switch (os) {
//       case 'centos':
//         return centos;
//       case 'debin':
//         return debin;
//       case 'suse':
//         return suse;
//       case 'ubuntu':
//         return ubuntu;
//       case 'windows':
//         return windows;
//       default:
//         return windows;
//     }
//   }
