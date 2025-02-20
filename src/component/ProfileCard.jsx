import React from "react";

function ProfileCard({ imgSrc, userName, isLoggin }) {
  return (
    <>
      {isLoggin ? (
        <section style={{width:"fit-content"}}>
          <div
            style={{
              border: "2px solid",
              overflow: "hidden",
              borderRadius: "40px",
              height: "200px",
              width: "200px",
            }}
          >
            <img
              width={200}
              height={200}
              src={
                imgSrc
                  ? imgSrc
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
              }
              alt="profileImage"
            />
          </div>
          <div>
            {userName && (
              <h1
                style={{ background: "black", color: "white", padding: "10px" }}
              >
                {userName}
              </h1>
            )}
          </div>
        </section>
      ) : (
        <div
            style={{
              border: "2px solid",
              overflow: "hidden",
              borderRadius: "40px",
              height: "200px",
              width: "200px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}
          >
        "please loggin"</div>
      )}
    </>
  );
}

export default ProfileCard;
