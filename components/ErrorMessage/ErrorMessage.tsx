import {Message} from './ErrorMessage.style';

export default function ErrorMessage ({errors, name}) {
  console.log(errors)
  console.log(name)
  return (
    errors[name] && 
    <Message>
       {errors[name].message}
    </Message>
  )
}