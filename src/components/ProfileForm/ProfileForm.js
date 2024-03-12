import {
  Button,
  Form,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
} from "./ProfileForm.styled";

const ProfileForm = (props) => {
  return (
    <FormWrapper>
      <h1>Edit your profile</h1>

      <Form onSubmit={props.update}>
        <InputWrapper>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={props.name}
            onChange={props.onChangeName}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            name="bio"
            id="bio"
            autoComplete="off"
            value={props.bio}
            onChange={props.onChangeBio}
          />
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            autoComplete="off"
            value={props.urlImage}
            onChange={props.onChangeUrlImage}
          />
        </InputWrapper>

        <Button>Save Changes</Button>
      </Form>
    </FormWrapper>
  );
};

export default ProfileForm;
