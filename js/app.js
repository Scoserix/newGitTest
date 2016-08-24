/*
 * TriviarModel provides basic methods to iterate
 * over a collection of questions
 */
var TriviaModel = {
  
   /* Collection of available questions */
   collection : questions, 
  
   /* Start the iteration over the collection of questions.
      It sets the first element as the current question */    
   init : function() {
       for(i=0;i<questions.length;i++)
           {
               this.collection[i]=questions[i];
           }
       
       currentQuestion=TriviaModel.collection[0];
   },
  
   /* Set the next element as the current question. 
      Returns true if it moved successfully to the next,
              false if there were no more elements */
   next : function(){
       this.collection.shift();
       if(this.collection.length==0)
           {
               return false;
           }
       else return true;
   },
  
   /* Returns the current question 
    *         null if the collection was not initiated
    */
   getCurrentQuestion: function () {
       if(this.collection==null || this.collection==undefined)
           return null;
       else
           return this.collection[0];
   },
  
   /* Checks if the answer provided is correct. The comparison
      is case-insensitive (Answer = ANSWER = aNswEr)
      Returns true if the answer is correct
              false if not
    */
   isAnswerCorrect : function (answer){
       if(this.getCurrentQuestion().answer.toLowerCase()===answer.toLowerCase())
           {
               return true;
           }
       else return false;
   }  
           
};

$(document).ready(function(){
    TriviaModel.init();
    $("#question").text(TriviaModel.getCurrentQuestion().question);
    points=0;
    $("#monsterCatched").text("Punteggio: "+points);
    $("button").click(function(){
        
         if(TriviaModel.isAnswerCorrect($("#answer").val()))
         {points++;$("#monsterCatched").text("Punteggio: "+points);}
        
        if(TriviaModel.next())
            {
                 $("#question").text(TriviaModel.getCurrentQuestion().question);
               
            }
        else
            {
                $("button").attr("disabled",true);
                alert("Domande finite.");
            }
    })
    
    
})