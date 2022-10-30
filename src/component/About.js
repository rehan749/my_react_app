import React, { useState } from 'react';

export default function About() {
    const [myStyle,setMyStyle]=useState(
        {
        color:'black',
        backgroundColor:'white',
    }
    )
       
    const [btnText, setBtnText] = useState('dark mode');

   const darkMode=()=>{
       if (myStyle.color==='red') {
           setMyStyle(
               {
               color:'black',
               backgroundColor:'white',
           }
           )
           setBtnText('dark mode')
       }
       else{
           setMyStyle(
               {
               color:'red',
               backgroundColor:'black',
           }
           )
           setBtnText('light mode')
           
       }
   }
       
   
    return(
        <div>
            <div className="container"  style={myStyle}>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Architecto ipsum odio dignissimos, quaerat repudiandae dolorem aliquid
           minus eveniet ducimus perspiciatis in magnam tenetur nihil cupiditate 
           facere iusto asperiores voluptatum optio aliquam dolore quos.
           Dolores deleniti maiores excepturi corporis asperiores ipsum 
           ratione sapiente, neque ab illum laborum est ipsa vero hic voluptates
           omnis odit rerum magnam maxime ex nemo mollitia deserunt non? Voluptate ipsa culpa nulla incidunt ex, architecto totam numquam sequi, quasi magnam dolorem praesentium est officia sint officiis molestias veniam qui maxime vero ducimus iusto ipsam atque? Earum molestias doloremque neque tenetur magnam temporibus delectus blanditiis cumque et commodi.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quaerat quos est perferendis debitis consectetur iste enim amet eveniet, natus impedit voluptas sequi laborum voluptatibus! Minus accusantium non similique fugiat architecto deserunt quia veniam iusto corporis quasi ipsam, odio laborum commodi aspernatur cupiditate nesciunt corrupti? Soluta eum fugiat, impedit blanditiis maiores ea deleniti sunt. Inventore quos nisi odit aperiam adipisci eveniet aut maxime vel, dolores laboriosam doloribus minima nobis ut ipsum laudantium voluptatum similique. Iste similique eius ex sequi ab vero quia voluptatem excepturi quo, autem quis veniam corporis quos ad architecto odit numquam ullam minima doloribus ipsam repudiandae magnam nemo. Hic aliquam magnam quis consequuntur aliquid accusamus numquam et maiores eaque quasi, nesciunt quisquam dicta rem modi officiis sed aspernatur eos? Natus, quos veniam necessitatibus maxime quasi beatae quod nesciunt ratione laborum, amet ea asperiores minus. Laborum cupiditate asperiores eos unde debitis ipsum ducimus quis beatae, illo eligendi nesciunt, dolore magnam hic distinctio inventore impedit nulla exercitationem rerum quibusdam officiis. Ab debitis odit nulla. Eos accusamus quod fuga odio earum porro vel, iste fugiat voluptates deleniti a ea architecto, similique aspernatur quasi sequi eveniet assumenda asperiores qui in! Quos est libero eaque earum, ducimus fugiat asperiores! Doloremque, at dolorem.</p>
                
                <button onClick={darkMode} className='btn-1'>{btnText}</button>
            </div>
        </div>
    )
    }