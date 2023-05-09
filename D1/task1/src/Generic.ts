 class genn<T>
{

public items:T[]

constructor()
{

    this.items=[]
}

public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}



const gen=new genn;


gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(7);

console.log(gen.pop());
console.log(gen);



for(var i=0;i<gen.items.length;i++)
{

console.log(gen.items[i]);

}