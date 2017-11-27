import React from "react";

export default function DisplayLine (props) {

    const style = {
        span1: {
            fontWeight: "bold",
            marginRight: "5px",
            fontSize: "20px"
        },

        span2: {
            fontStyle: "italic",
            marginRight: "10px",
            fontSize: "20px"
        }
    }

    return (
        <div>
            <span style={style.span1}>Name:  </span><span style={style.span2}>{props.name}</span>  <span style={style.span1}>Game:  </span><span style={style.span2}>{props.game}</span>
              <span style={style.span1}>Date:  </span><span style={style.span2}>{props.date}</span>  <span style={style.span1}>Score:  </span><span style={style.span2}>{props.score}</span>
                <span style={style.span1}>Trash:  </span><span style={style.span2}>{props.trash}</span>
        </div>
    )
}
