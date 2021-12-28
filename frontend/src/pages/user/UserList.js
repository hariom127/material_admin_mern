import { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { sentenceCase } from 'change-case';
import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  IconButton,
  Switch
} from '@mui/material';
// components
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../../components/_dashboard/user';
import AddUser from './AddUser';
import { getUsers, deleteUser, updateStatus } from '../../redux/action/userAction';
//
import USERLIST from '../../_mocks_/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'profile', label: 'Profile', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'action', label: 'Action', alignRight: true }
];

// ----------------------------------------------------------------------
const UserList = () => {
  const dispatch = useDispatch();

  // get users
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const userData = useSelector((state) => state.userReducer);
  const users = userData && userData.users ? userData.users : [];
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const childRef = useRef();

  // DELETE USER
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00AA55',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
      }
    });
  };

  // Update status
  const handleStatus = (id, status) => {
    dispatch(updateStatus(id, !status));
  };

  // modal
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Page title="User | Minimal-UI">
      <AddUser show={modal} close={Toggle} />

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
            onClick={() => Toggle()}
          >
            New User
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order=""
                  orderBy="name"
                  headLabel={TABLE_HEAD}
                  rowCount="5"
                  numSelected="0"
                  onRequestSort=""
                  onSelectAllClick="1"
                />
                <TableBody>
                  {users &&
                    users.map((user, index) => (
                      <TableRow
                        hover
                        key={user._id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={false}
                        aria-checked={false}
                      >
                        <TableCell component="th" scope="row" padding="none">
                          <div style={{ marginLeft: '10px' }}>
                            <Avatar alt={user.firstName} src={user.profile} />
                          </div>
                        </TableCell>
                        <TableCell align="left">{user.firstName}</TableCell>
                        <TableCell align="left">
                          <Label variant="ghost" color="success">
                            {sentenceCase(user.role)}
                          </Label>
                        </TableCell>

                        <TableCell align="left">
                          <Switch
                            key={index}
                            defaultChecked={user?.status}
                            value={user?.status ? user?.status : 0}
                            onClick={(e) => {
                              handleStatus(user?._id, user?.status);
                            }}
                          />
                        </TableCell>

                        <TableCell align="right">
                          <span htmlFor="icon-button-file">
                            <IconButton
                              onClick={(e) => {
                                handleDelete(user?._id);
                              }}
                              id="icon-button-file"
                              color="error"
                              aria-label="upload picture"
                              component="span"
                            >
                              <Icon icon="ant-design:delete-outlined" />
                            </IconButton>
                          </span>
                          <span htmlFor="icon-button-file">
                            <IconButton
                              id="icon-button-file"
                              color="info"
                              aria-label="upload picture"
                              component="span"
                            >
                              <Icon icon="akar-icons:edit" />
                            </IconButton>
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                {users && users.length === 0 && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count=""
            rowsPerPage="5"
            page="1"
            onPageChange=""
            onRowsPerPageChange=""
          />
        </Card>
      </Container>
    </Page>
  );
};
export default UserList;
