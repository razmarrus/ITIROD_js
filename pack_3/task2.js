class Task 
{
  constructor(name, info, start, end) {
    this.name = name;
    this.info = info;
    this.start = start.toDateString() 
    this.end =  end.toDateString() 
  }
}


class ExecutableTask extends Task 
{
  constructor(name, info, start, end, percentСompletion)
  {
    super(name, info, start, end);
    this.percentСompletion = percentСompletion;
    this.isDoneFlag = donePercent === 100;
  }
}

