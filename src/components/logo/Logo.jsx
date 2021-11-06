import propTypes from "prop-types";

export default function Logo(props) {
  const { type } = props;
  return (
    <>
      <img
        src={type === "muted" ? "./images/logo-muted.svg" : "./images/logo.svg"}
        alt="Logo"
      />
    </>
  );
}
propTypes.Logo = {
  type: propTypes.string,
};
