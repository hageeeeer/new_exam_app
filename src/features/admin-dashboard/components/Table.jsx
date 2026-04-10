import {Table} from "@heroui/react";
import { Options } from "./Options";
import { Link } from "react-router-dom";

export function AdminDiplomaTable() {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" >
          <Table.Header>
            <Table.Column isRowHeader>Image</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Descriptio</Table.Column>
            <Table.Column>Sort</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Link to={`diplomadmin/1`}>
                
                <img className="w-50" src="https://placehold.net/400x400.png" alt="" />
                </Link>
              </Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore assumenda maxime adipisci temporibus nostrum odio quia nobis vero tempore alias eaque doloribus fugit illo atque ad molestias sint molestiae ipsa, sit, incidunt sapiente maiores exercitationem architecto! Laborum obcaecati delectus corporis laudantium a sequi minima unde quia pariatur necessitatibus quidem, porro nulla iste consequuntur nihil tenetur iusto vero facere fugit ipsa, impedit rerum voluptates officiis voluptas. Placeat, cumque eius quis vel pariatur veniam ducimus velit voluptatibus ad, et voluptatum laborum corporis laudantium earum natus quibusdam cupiditate labore explicabo iusto adipisci nobis? Neque ducimus optio adipisci deserunt impedit blanditiis placeat iusto.</p>
              </Table.Cell>
              <Table.Cell>
                <Options/>
              </Table.Cell>
            </Table.Row>
             
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}