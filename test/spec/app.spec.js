/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Trivia", function() {
    
    it("Testa isAnswerCorrect true return", function() {  
    TriviaModel.init();
      expect(TriviaModel.isAnswerCorrect("aThenS")).toBe(true);
    
  });  
    
    it("Testa isAnswerCorrect false return", function() { 
        TriviaModel.init();
        expect(TriviaModel.isAnswerCorrect("aThezS")).toBe(false);
    
  });

  it("Testa getCurrentQuestion null return", function() {  
      TriviaModel.collection=null;
      expect(TriviaModel.getCurrentQuestion()).toBeNull();
    
  }); 
    
    
    it("Testa getCurrentQuestion defined return", function() { 
      expect(TriviaModel.getCurrentQuestion).toBeDefined();
    
  });
    
    it("Testa next false return", function() { 
        TriviaModel.collection=[];
      expect(TriviaModel.next()).toBe(false);
    
  }); 
    
    it("Testa next true", function() { 
        TriviaModel.init();
      expect(TriviaModel.next()).toBe(true);
    
  }); 
    
    it("Testa un'intera partita", function() { 
        TriviaModel.init();
      TriviaModel.isAnswerCorrect("athens");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("1896");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Michael Phelps");
        TriviaModel.next();
        TriviaModel.isAnswerCorrect("Nadia Comaneci");
        expect(TriviaModel.next()).toBe(false);;
    
  }); 
    
    
      
 
});
