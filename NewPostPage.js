import React, { useState } from "react";
import './NewPostPage.css';
function NewPostPage(){
    const[QuestionButton, setQuestionButton] =useState(false);
    const[ArticleButton, setArticle] = useState(false);

    const handleQuestionButtonClick = () => {
        setQuestionButton(true);
        setArticle(false); 
      };
    
      const handleArticleClick = () => {
        setArticle(true);
        setQuestionButton(false);
      };
    return(
        
        <>
            <div className="Heading">
                <h2 className="NewPostText">New Post</h2>
            </div>
            
            <form className="UserChoice">
            <h2 className="SelectOptionText">Select post option: </h2>
            
                <input  type="radio" id="QuestionButton" name="language" value="QuestionButton"   onClick={handleQuestionButtonClick}/>
                <label  for="QuestionButton">Question</label><br/>

                 <input type="radio" id="ArticleButton" name="language" value="Article" onClick={handleArticleClick} />
                <label for="ArticleButton">Article</label> 
            </form>

            {  QuestionButton && 
            <div>
            <div className="SubHeadingBox">
            <p className="QuestionHeading">What do you want to Ask or Share</p>
            </div>
            <div>
          <label for="Title">Title</label>
            <input className="Title" type="text" placeholder="Start your Question with how ,what ,why etc." name="title"/>

            </div>
            <div>
            <h3 className="ProblemDescribeText">Describe Your Problem</h3>
           
            <textarea id="area" rows="20" cols="50"></textarea>
            
            </div>
            <div className="Tags">
            <label for="text">Tags</label>
            
            <input type="text" id="text" placeholder="Add upto 3 tags to describe what your question is about e.g. , Java"/>
            </div>
            <div className="button">
            <button>Post</button>

            </div>
            </div>
            }

            {  ArticleButton && 
            <div>
            <div className="SubHeadingBox">
            <p className="QuestionHeading">What do you want to ask or share</p>
            </div>
            <div>
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Enter a Descriptive Title" name="title"/>

            </div>
            <div>
                <h3 className="ProblemDescribeText">Abstract</h3>
                <textarea id="area" rows="3" cols="50">Enter a 1-paragraph abstract</textarea>
            </div>
            <div>
                <h3 className="ProblemDescribeText">Article Text</h3>
                <textarea id="area" rows="11" cols="50">Enter a 1-paragraph abstract</textarea>
            </div>
            <div className="Tags">
            <label for="text">Tags</label>
            
            <input type="text" id="text" placeholder="Add upto 3 tags to describe what your article is about e.g. , Java"/>
            </div>
            <div className="button">
            <button>Post</button>

            </div>
            </div>
            }
            
            
        </>
    )
}

export default NewPostPage;