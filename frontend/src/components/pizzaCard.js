import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import ReactStars from 'react-stars'
const PizzaCard = ({food}) =>{
  return(
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img style={{width:"150px",height:"110px"}} alt="example" src={`http://localhost:4000/public/${food.image}`} />}
    >
      <Meta title={food.title} description={food.description} />
      {<ReactStars
                        name="simple"
                        count={5}
                  
                        size={24}
                        color={"#ffd700"}
                        edit={true}
                           
                        
                        />
                    }
    </Card>
  )
} 
export default PizzaCard;