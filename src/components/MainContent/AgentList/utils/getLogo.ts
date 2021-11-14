import centos from '../os_icons/centos.png';
import debin from '../os_icons/debin.png';
import suse from '../os_icons/suse.png';
import ubuntu from '../os_icons/ubuntu.png';
import windows from '../os_icons/windows.png';

export function getLogo(os: string) {
  switch (os) {
    case 'centos':
      return centos;
    case 'debin':
      return debin;
    case 'suse':
      return suse;
    case 'ubuntu':
      return ubuntu;
    case 'windows':
      return windows;
    default:
      return windows;
  }
}
