export class TestData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
  testDescription: string;
}

export class TestAsyncString {
  dataString: string;
  constructor(value: string){
    this.dataString = value;
  }
}
