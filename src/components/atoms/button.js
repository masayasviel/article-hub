import Button from '@mui/material/Button';

const PrimaryButton = (props) => {
  return (
    <Button variant="outlined">{props.value}</Button>
  )
}

export default PrimaryButton;