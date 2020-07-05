import React from 'react'
import Card from './Card'

const ExerciseList = ({ejercicios}) => (

        <div>
            {
                ejercicios.map((exercise) => {
                    return(

                        <Card
                            key={exercise.id}
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />

                    )
                })
            }
        </div>
)

export default ExerciseList