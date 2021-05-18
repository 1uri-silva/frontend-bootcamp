import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title> Explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/78041884?v=4"
            alt="Iuri"
          />
          <div>
            <strong>rd-easy/auth-app</strong>
            <p>application created with authentication using (useContext)</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/78041884?v=4"
            alt="Iuri"
          />
          <div>
            <strong>rd-easy/auth-app</strong>
            <p>application created with authentication using (useContext)</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars.githubusercontent.com/u/78041884?v=4"
            alt="Iuri"
          />
          <div>
            <strong>rd-easy/auth-app</strong>
            <p>application created with authentication using (useContext)</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
