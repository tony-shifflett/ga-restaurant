import React from 'react'
import '../styles/branches.css'
import avocadoToast from '../assets/images/unsplash_fdlZBWIP0aM.jpg'
import veggiePlate from '../assets/images/unsplash_IGfIGP5ONV0.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { click } from '@testing-library/user-event/dist/click'

const Branches = () => {

    let highlightedElement =-1; 
    let firstClick = true; 

    const clickIncrement =()=>{
        console.log(highlightedElement)
        if (highlightedElement <= 4){
            highlightedElement++; 
        }else{
            highlightedElement = 0; 
        }

        if(!firstClick){
            if (highlightedElement == 0){
                document.getElementById('4').style.backgroundColor='transparent'
            } else {
                document.getElementById((highlightedElement-1).toString()).style.backgroundColor='transparent'
            }
        }

        document.getElementById(highlightedElement.toString()).style.backgroundColor = 'limegreen'
        firstClick = false;
    }

    const clickDecrement =()=>{

        if (highlightedElement >0){
            highlightedElement--
        } else {
            highlightedElement = 4;
        }
        if(!firstClick){
            if(highlightedElement==4){
                document.getElementById('0').style.backgroundColor='transparent'
            }else{
            document.getElementById((highlightedElement+1).toString()).style.backgroundColor='transparent'
            }
        }
        document.getElementById(highlightedElement.toString()).style.backgroundColor='limegreen'
        firstClick = false
    }

  return (
    <div id="branches-page">
        <img src={avocadoToast} alt="avocado toast" id="lead-image"/>
        <div id='page-body'>
            <div id="branch-menu">
                <p id='branch-title'>Our Branches</p>
                <p>Li lingues differe solmen in li grammatica, li pronunciation e li plu <br/>
                commun vocabules. Ominicos directe al desirabilite</p>
                <FontAwesomeIcon icon={faAngleUp} onClick={clickDecrement} style={{color: 'limegreen'}}/>
                <ul id='locations'>
                    <li id={0}>4266 South Street, Tualatin, OR 97062</li>
                    <li id={1}>5666 Mill Street, Odenton, MD 21113</li>
                    <li id={2}>8741 Lilac Lane, State College, PA 16801</li>
                    <li id={3}>6268 1st Avenue, Brookline, MA 02446</li>
                    <li id={4}>7591 Broadway, Milwaukee, WI 53204</li>
                </ul>
             <FontAwesomeIcon icon={faAngleDown} onClick={clickIncrement} style={{color: 'limegreen'}}/>
            </div>
            <img src={veggiePlate} alt="plate of vegetables"/>
        </div>
    </div>
  )
}

export default Branches