import React,{useState} from 'react';

    const Contact =()=>{

        const [name,setName]=useState({
            fname:'',
            phone:'',
            email:'',
            message:'',

        });


    const InputEvent =(event)=>
    {
        console.log(event.target.value);
        console.log(event.target.name);

        const value=event.target.value;
        const name=event.target.name;

        setName((preValue)=>{

            console.log(preValue);
            if(name==='fullname')
            {
                return {
                fname:value,
                phone:preValue.phone,
                };
            }
            else{
                return {
                    fname:preValue.fname,
                    phone:value,
                }
            }
        });
        //setName(event.target.value);
    };


    const onSub =(e)=>
    {
        e.preventDefault();
        alert('form submitted');
    };

    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us {name.email }{name.message}</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={onSub}>
                    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">FullName</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"  name="fullname" /*value={name.fname} */ onChange={InputEvent} />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number"  name="phone" /*value={name.phone}*/ onChange={InputEvent} />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"  name="email" /*value={name.email}*/ onChange={InputEvent} />
</div>


<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  name="msg" /*value={name.message}*/ onChange={InputEvent}></textarea>
</div>

<div class="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
    };
    
export default Contact;