import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => backgrounds[props.type]};
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.4);
  color: ${props => text[props.type]};
  font-size: 1rem;
  margin: 1rem 10vh;
  padding: 0.5rem;
  width: 20vh;
  text-transform: uppercase;
  transition: 0.1s ease;

  &:hover {
    transform: ${props =>
      props.type === 'disabled' ? 'none' : 'translateY(-2.5%)'};
  }
`;

Button.defaultProps = {
  type: 'default',
};

const backgrounds = {
  default: 'var(--clear)',
  primary: 'var(--deep-blue)',
  info: 'var(--electric-blue)',
  disabled: 'var(--light-gray)',
  warning: 'var(--gold)',
  danger: 'var(--red)',
};

const text = {
  default: 'var(--deep-blue)',
  primary: 'var(--white)',
  info: 'var(--white)',
  disabled: 'var(--gray)',
  warning: 'var(--black)',
  danger: 'var(--white)',
};
