export class RandomService {
    getRandomNumber(): number {
        return Math.floor(Math.random() * 100);
    }
}

export function randomFactory() {
    return new RandomService();
  }