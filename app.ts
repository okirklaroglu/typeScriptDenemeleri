abstract class RobotsFactory {
  _robotsStartingProduction: number;
  _robotsSuccessfulCompleted: number;
  _robotsProductionCancelled: number;
  _fabricX: number;
  _fabricY: number;
  _fabricZ: number;
  constructor() {}
}

class Robot extends RobotsFactory {
  robotName: string;
  robotWeight: number;
  robotSerialNumber: number;

  constructor(
    fabricX: number,
    fabricY: number,
    fabricZ: number,
    robotW: number
  ) {
    super();
    this._fabricX = fabricX;
    this._fabricY = fabricY;
    this._fabricZ = fabricZ;
    this.robotWeight = robotW;
  }
  robotSpecs() {
    console.log(`Merhaba ben ${this.robotName}, 
                    \nSeri Numaram ${this.robotSerialNumber}, 
                    \nBoyutlarım ${this._fabricX}cm / ${this._fabricY}cm / ${this._fabricZ} ve ağırlığım ${this.robotWeight} KG`);
  }
}

//Burası Kopya oldu!!!... (daha kolayı varsa bilmek isterim...)
function getRandomString(length) {
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

let robotOne = new Robot(150, 30, 40, 50);
robotOne.robotName = getRandomString(4);
robotOne.robotSerialNumber = Math.floor(Math.random() * 1000000000 + 1);

robotOne.robotSpecs();
