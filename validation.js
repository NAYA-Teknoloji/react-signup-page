const validation = (values) => {
    let errors={};

    if(!values.name){
        errors.name="İsim boş bırakılamaz."
    }
    if(!values.surname){
        errors.surname="Soyisim boş bırakılamaz."
    }
    if(!values.email){
        errors.email="E-posta boş bırakılamaz."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="E-posta geçersiz"
    }
    if(!values.number){
        errors.number="Şirket telefonu boş bırakılamaz."
    }
    if(!values.password ){
        errors.password="Şifre boş bırakılamaz."
    }
    return errors;
}

export default validation;