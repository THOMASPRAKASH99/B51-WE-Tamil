import React from 'react'
import Card from 'react-bootstrap/Card';

function BlogCard({title,image,description}) {
  return <>
  
  <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={image?image:"https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}/>
      <Card.Body>
        <Card.Title>{title?title:"Card Title"}</Card.Title>
        <Card.Text>
         {
            description?description:" Some quick example text to build on the card title and make up the bulk of the card's content."
         }
        </Card.Text>
      </Card.Body>
    </Card>   
  </>
}

export default BlogCard