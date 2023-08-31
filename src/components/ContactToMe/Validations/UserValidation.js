import * as yup from 'yup';


export const contactFormSchema = yup.object().shape({
    user_name: yup.string().required('❌ Name is required.').min(3,'❌ Minimum 3 characters.').max(25,'❌ Maximum 1000 characters'),
    user_email: yup.string().email('❌ Invalid email address.').required('❌ Email is required.'),
    message: yup.string().min(3,'❌ Minimum 3 characters').max(1000,'❌ Maximum 1000 characters').required('❌ Message is required.'),
});