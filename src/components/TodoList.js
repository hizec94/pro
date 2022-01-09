import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="프로젝트 서버띄우기" done={true} />
      <TodoItem text="화면 그리기" done={true}/>
      <TodoItem text="function 넣기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;