import * as React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, IconButton, InputAdornment, Avatar } from '@mui/material';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import { createUser } from '../../redux/action/userAction';
import Modal from '../../components/modal';

const Input = styled('input')({
  display: 'none'
});

const AddUser = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const [profile, setProfile] = useState(false);
  const [profileImgPreview, setProfileImgPreview] = useState('');

  useEffect(() => {
    if (!profile) {
      setProfileImgPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(profile);
    setProfileImgPreview(objectUrl);
    console.log(objectUrl, 'img url');
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [profile]);

  // on change profile pic
  function onChnageImage(e) {
    console.log('onchange', e.target.files);
    if (!e.target.files || e.target.files.length === 0) {
      setProfile(undefined);
      return;
    }
    setProfile(e.target.files[0]);
  }

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(8, 'Must be exactly 8 digits or more')
      .max(12, 'Must be exactly 12 digits or less')
  });

  useImperativeHandle(ref, () => ({
    handleClickOpen() {
      setOpen(true);
    }
  }));

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      console.log(values.firstName, '===call');

      const data = new FormData();
      if (profile) {
        // data.append('user_image', profile);
      }
      data.append('firstName', values.firstName);
      data.append('lastName', values.lastName);
      data.append('email', values.email);
      data.append('phone', values.phone);

      setTimeout(() => {
        action.setSubmitting(false);
        // const data = { name: 'hariom' };
        // for (const key of data.entries()) {
        //   console.log(`${key[0]} - ${key[1]}`);
        // }
        dispatch(createUser(data));
      }, 1000);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <div>
      {/* modal */}

      <Modal show={props.show} close={props.close} title="Add User">
        <br />
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  label="First name"
                  {...getFieldProps('firstName')}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />

                <TextField
                  fullWidth
                  label="Last name"
                  {...getFieldProps('lastName')}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  autoComplete="username"
                  type="email"
                  label="Email address"
                  {...getFieldProps('email')}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  {...getFieldProps('phone')}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<Icon icon="bx:bx-image-add" />}
                >
                  Upload
                  <input type="file" accept="image/*" hidden onChange={onChnageImage} />
                </Button>

                <IconButton
                  sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                      '&:before': {
                        zIndex: 1,
                        content: "''",
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        position: 'absolute'
                        // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                      }
                    })
                  }}
                >
                  <Avatar src={profileImgPreview} />
                </IconButton>
              </Stack>
              <div align="end">
                <LoadingButton
                  onClick={handleSubmit}
                  size="large"
                  type="button"
                  variant="contained"
                  loading={isSubmitting}
                  style={{ marginRight: '10px' }}
                >
                  Register
                </LoadingButton>

                <Button
                  onClick={props.close}
                  size="large"
                  type="button"
                  variant="contained"
                  color="error"
                >
                  Cancel
                </Button>
              </div>
            </Stack>
          </Form>
        </FormikProvider>
      </Modal>
      {/* modal */}
    </div>
  );
});

export default AddUser;
