import React, { useContext, useState } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Dropdown,
  Modal,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Shared.css";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from "../assests/logo.png";
import regis from "../assests/regis.png";
import login from "../assests/log.png";
import { GoogleAuthProvider } from "firebase/auth";
import { UserAuth } from "../Auth/AuthContext";
import { toast } from "react-hot-toast";

const Header = () => {
  const {
    user,
    googleAuthProvider,
    logOutUser,
    userLogIn,
    createUser,
    nameUpdate,
  } = useContext(UserAuth);
  const [registerShow, setRegisterShow] = useState(false);
  const [LogShow, setLogShow] = useState(false);
  const handleRegisterClose = () => setRegisterShow(false);
  const handleLogClose = () => setLogShow(false);
  const handleRegisterShow = () => setRegisterShow(true);
  const handleLogShow = () => setLogShow(true);
  const googleProvider = new GoogleAuthProvider();
  const direction = "start";

  // switch between register
  const registerSwitch = () => {
    setLogShow(false);
    setRegisterShow(true);
  };
  // switch between login
  const signInSwitch = () => {
    setRegisterShow(false);
    setLogShow(true);
  };
  const { register, handleSubmit, reset } = useForm();

  // data for register
  const onRegistrationSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.warning("Password does not match");
    }
    const name = data.firstName + " " + data.lastName;
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Sign Up Success");
        nameUpdate(name);
        handleRegisterClose();
        reset();
      })

      .then(() => {});
  };

  // google sign in
  const handleGoogle = () => {
    googleAuthProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegisterShow(false);
        setLogShow(false);
        toast.success("login success");
      })
      .catch((e) => {
        console.log(e);
        toast.error("log in Failed");
      });
  };
  // log out
  const handleLogOut = () => {
    logOutUser().then(() => {
      toast.success("log out success");
    });
  };

  // data for Sign In
  const onLogSubmit = (data) => {
    handleLogClose();
    userLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Log in Success");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Login failed");
      });
  };
  return (
    <>
      <Navbar expand="lg" className="d-none d-md-block">
        <Container>
          <Link to="/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex w-50 mx-auto py-3">
              <Form.Control
                type="search"
                placeholder="&#128269; Search For your favorite groups in ATG"
                className="me-2 rounded-pill"
                aria-label="Search"
              />
            </Form>
            {!user ? (
              <Dropdown>
                <div className="d-flex align-items-center">
                  <p className="me-1 mt-3">Create account.</p>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                    className="p-0 m-0 text-primary"
                  >
                    It's free
                  </Dropdown.Toggle>
                </div>

                <Dropdown.Menu className="p-0 mx-0">
                  <Dropdown.Item>
                    <Button
                      variant="transparent"
                      onClick={handleRegisterShow}
                      className="w-100 p-0"
                    >
                      Register
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      variant="transparent"
                      onClick={handleLogShow}
                      className="w-100 p-0"
                    >
                      Log in
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <DropdownButton
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="transparent"
                  title={user?.displayName}
                >
                  <Dropdown.Item>
                    <Button variant="transparent" className="w-100 p-0">
                      Profile
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      variant="transparent"
                      onClick={handleLogOut}
                      className="w-100 p-0"
                    >
                      Log out
                    </Button>
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* //Register  modal goes here */}
      <Modal
        show={registerShow}
        onHide={handleRegisterClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-title text-center">
          <Modal.Title className="fs-6 text-success  ">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now. &#x270c;
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Row className="justify-content-between">
            <Col>
              <h2>Create Account</h2>
              <Form onSubmit={handleSubmit(onRegistrationSubmit)}>
                <div className="d-flex mb-3">
                  <Form.Control
                    placeholder="First name"
                    className="rounded-start"
                    {...register("firstName")}
                  />

                  <Form.Control
                    placeholder="Last name "
                    className="rounded-end"
                    {...register("lastName")}
                  />
                </div>
                <Form.Control
                  placeholder="Email"
                  className="mb-2"
                  {...register("email")}
                />
                <Form.Control
                  placeholder="Password"
                  type="password"
                  className="mb-2"
                  {...register("password")}
                />
                <Form.Control
                  placeholder="Confirm Password"
                  type="password"
                  className="mb-4"
                  {...register("confirmPassword")}
                />
                <Button
                  className="w-100 rounded-pill"
                  variant="primary"
                  type="submit"
                >
                  Create Account
                </Button>
              </Form>
              <Button
                className="w-100 mt-4"
                variant="outline-dark"
                type="submit"
              >
                <FaFacebook className="text-primary fs-5 me-1" /> Sign up with
                Facebook
              </Button>
              <Button
                className="w-100 mt-2"
                variant="outline-dark"
                type="submit"
                onClick={handleGoogle}
              >
                <FcGoogle className="fs-5 me-1" /> Sign up with Google
              </Button>
            </Col>
            <Col className="text-end">
              <p>
                <span className="me-1 mt-1">Already Have an account?</span>
                <button
                  className="p-0 m-0 none bg-transparent border-0 text-primary fw-semibold"
                  onClick={signInSwitch}
                >
                  Sing In
                </button>
              </p>
              <Image src={regis} width="" height=""></Image>
              <p className="text-muted">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* //log in   modal goes here */}
      <Modal
        show={LogShow}
        onHide={handleLogClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-title">
          <Modal.Title className="fs-6 text-success text-center ">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign in now. &#x270c;
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <Row className="justify-content-between">
            <Col>
              <h2>Sign In</h2>
              <Form onSubmit={handleSubmit(onLogSubmit)} className="mt-4">
                <Form.Control
                  placeholder="Email"
                  {...register("email")}
                  className="mb-2"
                />
                <Form.Control
                  placeholder="Password"
                  className="mb-3"
                  type="password"
                  {...register("password")}
                />
                <Button
                  className="w-100 rounded-pill"
                  variant="primary"
                  type="submit"
                >
                  Create Account
                </Button>
              </Form>
              <Button
                className="w-100 mt-3"
                variant="outline-dark"
                type="submit"
              >
                <FaFacebook className="text-primary fs-5 me-1" /> Sign up with
                Facebook
              </Button>
              <Button
                className="w-100 mt-2"
                variant="outline-dark"
                type="submit"
                onClick={handleGoogle}
              >
                <FcGoogle className="fs-5 me-1" /> Sign up with Google
              </Button>
              <Button
                className="w-100 mt-2"
                variant="transparent"
                type="submit"
              >
                Forget Password
              </Button>
            </Col>
            <Col className="text-end">
              <p>
                <span className="me-1 mt-1">Don't have an account yet?</span>
                <button
                  className="p-0 m-0 none bg-transparent border-0 text-primary fw-semibold"
                  onClick={registerSwitch}
                >
                  Create new for free
                </button>
              </p>
              <Image src={login} width="" height="" className="mt-2"></Image>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
