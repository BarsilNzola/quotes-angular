import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      const differenceInSeconds = Math.floor((+new Date() - +new Date(value))/1000);
      if (differenceInSeconds < 30){
        return 'Just now';
      }

      const timeIntervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1,
      };
      let counter;
      for (const i in timeIntervals) {
        counter = Math.floor(differenceInSeconds / timeIntervals[i]);
        console.log("Counter is"+ counter);
        if (counter > 0){
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i +'s ago';
          }
        }
      }
    }
    return value;
  }

}
