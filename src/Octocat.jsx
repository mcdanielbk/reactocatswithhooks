import React from 'react';
export function Octocat (props) {
  
    return (
      <article>
        <figure>
          <a href={props.link}>
            <img
              src={props.image}
              width="400"
              height="400"
              alt={props.name} />
          </a>
        </figure>
        <ul>
          <li>
            #{props.number}
            <a href={props.link}>
              <strong>{props.name}</strong>
            </a>

          </li>
          <li>
            <a href={props.authorlink}
            ><img
                src={props.authorpic}
                width="24"
                height="24"
                alt={props.authorname} />
            </a>
          </li>
        </ul>
      </article>


    );
  }

