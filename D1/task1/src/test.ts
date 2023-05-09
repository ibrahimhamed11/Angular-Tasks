var first  : string;


class Rectangle {
    public width: number;
    public height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    public CalcCircumference(): number {
      return 2 * (this.width + this.height);
    }
  
    public static WhoAmI(): void {
      console.log("I am rectangle");
    }
  }


  class square extends Rectangle
  {



    constructor(height:number)
    constructor(width: number) {
       
        super(width,width);
        this.width = width;
       
      }

      public CalcCircumference(): number {
        return 4 * (this.width + this.height);
      }

      public static WhoAmI(): void {
        console.log("I am square");
      }
  }
  

  const rectangle=new Rectangle(10,10)
  console.log(rectangle);

  const squar=new square(10)
  console.log(squar);