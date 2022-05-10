import React from 'react';
import { Cart } from './Cart';
import Heading from './Heading';
export const About = () => {
  return (
    <div className='container-fluid' style={{ 
      minHeight:'100vh',backgroundImage: `url("/bg.webp")`,backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundSize:`100% 100%`, 
      }}>
          <Heading heading='আমাদের সম্পর্কে' text='Something short and leading about the collection below—its contents, the creator, etc.' buttonDesign='btn btn-outline-warning my-2 mx-2' buttonName1="Let's Explore" id='about'/>
          <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">       
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-12 d-flex justify-content-center align-items-center">
                      <img className="align-self-center mr-3" src="habib.jpg" style={{height:'300px',}} alt="Habib's image"/>  
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 col-12 d-flex justify-content-center align-items-center">
                      <div>
                      <h5 class="mt-0">Habibur Rahman</h5>
                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                      <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> 
                      </div> 
                    </div>
            </div>
          </div>
        </div>
        </div>
      
  )
}
