import { useForm } from 'react-hook-form';

export const Register = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    console.log(watch("example"));
    console.log(watch("wea"));
    
    return(
        <section className="hero is-fullheight">
            <div className="container hero-body has-text-centered">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="field">
                        <label className="label">First Name</label>
                        <div className="control">
                            <input className="input" name="name" placeholder="Name" ref={register({required:true, minLength: 6})} />
                            { errors.name && <p className="help is-danger">This field is required</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Last Name</label>
                        <div className="control">
                            <input className="input" name="lastName" placeholder="Last Name" ref={register({ required: true , maxLength: 10})} />
                            { errors.lastName && <p className="help is-danger">This field is required</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" name="email" placeholder="example@mail.com" ref={register({ required: true , maxLength: 10})} />
                            { errors.email && <p className="help is-danger">This field is required</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" name="password" placeholder="*******" ref={register({ required: true , maxLength: 10})} />
                            { errors.password && <p className="help is-danger">This field is required</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Re-type Password</label>
                        <div className="control">
                            <input className="input" type="repassword" name="repassword" placeholder="*******" ref={register({ required: true , maxLength: 10})} />
                            { errors.repassword && <p className="help is-danger">This field is required</p>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Submit info</label>
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}