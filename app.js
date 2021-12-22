class Media{
    constructor(title){
      this._title = title
      this._ratings = []
      this._isCheckedOut = false
    }
  
    get title(){
      return this._title
    }
  
    get ratings(){
      return this._ratings
    }
  
    get isCheckedOut(){
      return this._isCheckedOut
    }
  
    set isCheckedOut(newValue){
      this._isCheckedOut = newValue
    }
  
    getAverageRating(){
      let sumOfRatings = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)
      /* for(let i = 0; i < this._ratings.length; i++){
        sumOfRatings += this._ratings[i]
      } */
      return sumOfRatings/this._ratings.length
    }
  
    toggleCheckOutStatus(){
      /* if(this._isCheckedOut){
        isCheckedOut(false)
      }else{
        isCheckedOut(true)
      } */
      this._isCheckedOut = !this._isCheckedOut
    }
  
    addRating(newRating){
      this.ratings.push(newRating)
    }
  }
  
  class Book extends Media{
    constructor(title, author, pages){
      super(title)
      this._author = author
      this._pages = pages
    }
  
    get author(){
      return this._author
    }
  
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media{
    constructor(title, director, runTime){
      super(title)
      this._director = director
      this._runTime = runTime
    }
  
    get director(){
      return this._director
    }
  
    get runTme(){
      return this._runTime
    }
  }
  
  class CD extends Media{
    constructor(title, artist, songs){
      super(title)
      this._artist = artist
      this._songs = songs
    }
  
    get artist(){
      return this._artist
    }
  
    get songs(){
      return this._songs
    }
  }
  
  const historyOfEverything = new Book('A Short HIstory of Nearly Everything', 'Bill Bryson', 544)
  console.log(historyOfEverything.author)
  console.log(historyOfEverything.pages)
  console.log(historyOfEverything.title)
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.ratings)
  console.log(historyOfEverything.getAverageRating())
  console.log()
  const speed = new Movie('Speed', 'Jan de Bont', 116)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  