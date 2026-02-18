import { Pipe, PipeTransform } from '@angular/core';

export type DotState = 'full' | 'half' | 'empty';

@Pipe({
  name: 'spectatorDots',
  standalone: true
})
export class SpectatorDotsPipe implements PipeTransform {
  transform(userNote?: number, maxDots = 5): DotState[] {
    if (userNote === undefined || userNote === null) return [];

    // note sur 10 -> sur 5
    const scoreOnFive = Math.max(0, Math.min(10, userNote)) / 2;

    const full = Math.floor(scoreOnFive);
    const rem = scoreOnFive - full;

    const dots: DotState[] = [];

    for (let i = 0; i < full && i < maxDots; i++) dots.push('full');

    if (dots.length < maxDots) {
      if (rem >= 0.75) {
        dots.push('full');
      } else if (rem >= 0.25) {
        dots.push('half');
      }
    }

    while (dots.length < maxDots) dots.push('empty');

    return dots;
  }
}
