import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    // console.log(this.props);
    // const{name, age, belt} = this.props;
    // const { ninjas } = props;
    const ninjalist = ninjas.map(ninja => {
        if(ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                    <div> Name: {ninja.name}</div>
                    <div> Age:{ninja.age}</div>
                    <div> Belt:{ninja.belt}</div>
                    <button onClick= {() => {deleteNinja(ninja.id)}}>Delete</button> <br /> <br />
                </div>
            )
        }
        else 
            return null;
    });
    return (
        <div className="ninjalist">
            {ninjalist}
        </div>
    )
}

export default Ninjas;