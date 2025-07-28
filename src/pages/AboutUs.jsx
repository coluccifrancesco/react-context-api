import Jumbo from '../components/Jumbo'

export default function AboutUs(){

    const team = [  
   {
    name: "Alice",
    age: 28,
    profession: "Web Developer",
    hobbies: "coding, reading, traveling",
    id: 1
  },
  {
    name: "Marco",
    age: 35,
    profession: "Graphic Designer",
    hobbies: "drawing ,photography, cycling",
    id: 2
  },
  {
    name: "Sophia",
    age: 24,
    profession: "Data Analyst",
    hobbies: "puzzle games, hiking, cooking",
    id: 3
    
  },
  {
    name: "Luca",
    age: 30,
    profession: "Marketing Specialist",
    hobbies: "social media, writing, football",
    id: 4
  }
    ];

    return(
        <main className='mt-5 pt-5'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1>Scopri il nostro Team</h1>
                
                <div className='container'>
                    <ul className="row list-unstyled">
                        
                        {team.map((person)=>{
                            return <li key={person.id} className="col col-12 col-md-6 col-lg-3 my-4">
                           
                                <div className="card">
                                    <img src='https://picsum.photos/200'/>
                                    <div className='card-body'>
                                        <h1 className='card-title'>{person.name}</h1>
                                            
                                        <div className='d-flex justify-content-start align-items-center gap-4 mt-3 mb-0'>
                                            <p className='mb-2'>{person.age} anni</p>
                                            <p className='mb-2'>Ruolo: {person.profession}</p>
                                        </div>
                                            
                                        <p>Hobby: {person.hobbies}</p>
                                    </div>
                                </div>
                            </li>
                        })}
                    
                    </ul>
                </div>
            </div>

            <Jumbo />
        </main>
    )
}