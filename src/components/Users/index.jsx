import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';



export const Users = ({ users, isLoading, onChangeSearchVal, search, onClickInvite, invites, onClickSucsess }) => {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          onChange={onChangeSearchVal}
          value={search}
          type="text"
          placeholder="Найти пользователя..." />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {users.data.filter(obj => {
            const fullName = (obj.first_name + ' ' + obj.last_name).toLowerCase();
            return fullName.includes((search).toLowerCase())

          }).map(obj => (<User key={obj.id} {...obj} isInvited={invites.includes(obj.id)} onClickInvite={onClickInvite} invites={invites} />))}
        </ul>
      )}
      {invites.length > 0 && <button onClick={() => onClickSucsess(invites)} className="send-invite-btn">Отправить приглашение</button>}
    </>
  );
};
