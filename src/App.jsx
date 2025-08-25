import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const usrData = {
    "page": 1,
    "per_page": 5,
    "total": 5,
    "total_pages": 2,
    "data": [
      {
        "id": 1,
        "email": "email1.com",
        "first_name": "Gergie",
        "last_name": "Bluth",
        "avatar": "https://avatars.mds.yandex.net/get-shedevrum/10502823/video_preview_fa08e39c047b11efa49e0a6d81cb79fd_2/orig"
      },
      {
        "id": 2,
        "email": "email2.com",
        "first_name": "Kris",
        "last_name": "Pussy",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlIZbgZj8fzOa0PH5iGJL2w3p-EF5KB2rIw&s"
      },
      {
        "id": 3,
        "email": "email3.com",
        "first_name": "Mark",
        "last_name": "Member",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgM7j_ZRxYfcwg79umk8X4e6n9CnAP_U0cg&s"
      },
      {
        "id": 4,
        "email": "email4.com",
        "first_name": "Miss",
        "last_name": "Doiki",
        "avatar": "https://i.pinimg.com/474x/13/c2/55/13c255a0798b50f8a338446b78c64940.jpg"
      },
      {
        "id": 5,
        "email": "email5.com",
        "first_name": "Pavel",
        "last_name": "Durov",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14ZgdxmFPJabR-Re7KmP36GQYowBAI6_-6Q&s"
      }
    ]
  }
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([])
  const [isLoading, setLoading] = React.useState(false);
  const [isSucsess, setSucsess] = React.useState(false);

  const [search, setSearch] = React.useState('')

  /*   React.useEffect(() => {
      fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
        setUsers(json.data);
      }).catch(err => {
        console.log(err);
        alert('Ошибка при получении пользователей')
      }).finally(() => setLoading(false))
    }, []) */
  const onChangeSearchVal = (event) => {
    setSearch(event.target.value);
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites(prev => [...prev, id]);
    }
  }
  const onClickSucsess = (query) => {
    if (query.length !== 0) {
      setSucsess(true)
    }
  }

  return (
    <div className="App">
      {isSucsess === false ?
        (<Users
          onChangeSearchVal={onChangeSearchVal}
          search={search} isLoading={isLoading}
          setLoading={setLoading}
          users={usrData}
          onClickInvite={onClickInvite}
          invites={invites}
          onClickSucsess={onClickSucsess}
        />) : (<Success />)}
    </div>
  );
}

export default App;
