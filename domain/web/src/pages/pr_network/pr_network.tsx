import React, { useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d'
import {IPR} from "../../types/pr"

interface INode { id: string, group: string, time: number, waiting: number }
interface ILink {source: string, target: string}

const PRNetworkPage: React.FC = () => {
    const [prs, setPRs] = useState<IPR[]>([]);
    const [nodes, setNodes] = useState<INode[]>([]);
    const [links, setLinks] = useState<ILink[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = React.useState<{ nodes: INode[], links: ILink[] }>()

    const [hoverNode, setHoverNode] = React.useState(null)
    const [highlightNodes, setHighlightNodes] = React.useState(new Set())
    const [highlightLinks, setHighlightLinks] = React.useState(new Set())

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`http://localhost:8000/prs`);
            console.log(response)
            if (!response.ok) {
              throw new Error('User not found');
            }
            const data = await response.json();
            console.log(data)
            const new_nodes: INode[] = []
            const new_links: ILink[] = []
            data.forEach((e: IPR) => {
                new_nodes.push({id: e.name, group: e.type, time: e.min_stay, waiting: e.waiting_time})
                
                if(e.connect_with){
                    e.connect_with.forEach(l => {
                        new_links.push({ source: e.name, target: l })
                    })
                }
                
            });
            console.log(new_nodes)
            console.log(new_links)
            setNodes(new_nodes)
            setLinks(new_links)
            setData({nodes: new_nodes, links: new_links})
            setPRs(data);
          } catch (error) {
            setError('Failed to fetch user');
          }
        };
    
        fetchUser();
    }, []);

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes)
        setHighlightLinks(highlightLinks)
      }

    const nodeCanvasObject = React.useCallback(
        (node: any, ctx: any) => {
          const label = node.id
          const nodeRadius = 5
          const opacity = (highlightNodes.has(node) ? 1.0 : 0.2)
          
          ctx.beginPath()
          const fontSize = 12 / 3
          ctx.font = `${fontSize}px Sans-Serif`
    
          ctx.arc(node.x as number, node.y as number, nodeRadius, 0, 2 * Math.PI)
    
          ctx.globalAlpha = opacity
    
          ctx.closePath()
          ctx.fill()
    
          ctx.beginPath()
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillStyle = 'black'
          ctx.fillText(label as string, node.x as number, (node.y + nodeRadius + 4) as number)
          ctx.globalAlpha = opacity
          ctx.closePath()

          // Set cursor to pointer on hover
          const hover = ctx.isPointInPath(node.x, node.y);
          document.body.style.cursor = hover ? 'pointer' : 'default';
        },
        [hoverNode],
      )

      const handleNodeHover = (node: any) => {
        highlightNodes.clear();
        highlightLinks.clear();
        // console.log(node)
        if (node) {
            // Add the hovered node to the highlight set
            highlightNodes.add(node);

            // Add all connected links and their respective nodes to the highlight sets
            links.forEach(link => {
                if (link.source == node.id || link.target == node.id) {
                    highlightLinks.add(link);
                    highlightNodes.add(nodes.find(n => n.id == link.source));
                    highlightNodes.add(nodes.find(n => n.id == link.target));
                }
            });
        }

        setHoverNode(node || null);
        updateHighlight();
      }

    return (
        <div>
            <ForceGraph2D
                graphData={data}
                nodeAutoColorBy={'group'}
                nodeCanvasObject={nodeCanvasObject}
                linkCurvature={undefined}
                linkLabel={undefined}
                onNodeHover={handleNodeHover}
            />
        </div>
    );
}

export default PRNetworkPage;