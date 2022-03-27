import React from "react";
import Card from "./Card";
import {v4 as uuidv4} from 'uuid'

export default function Main() {
      let data = [
        {
          image: "https://us.123rf.com/450wm/scanrail/scanrail1809/scanrail180900168/110003490-creative-abstract-php-web-design-internet-programming-html-language-and-digital-computer-technology-.jpg?ver=6",
          text: "Aš mokausi HTML",
          learning: "Išmokau"
        },
        {
          image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
          text: "Aš mokausi CSS",
          learning: "Išmokau"
        },
        {
          image: "https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg?q=72",
          text: "Aš mokausi JavaScript",
          learning: "Išmokau"
        }
      ];

      let list = data.map(item => {
        return <Card key={uuidv4()} cardImage={item.image} cardText={item.text} cardLearning={item.learning} />
      })

      return(
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {list}
            </div>
          </div>
        </div>
      )
  };
