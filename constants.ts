import React from 'react';
import { Video, Skill } from './types';

export const PROFILE_IMAGE_URL = 'https://media.licdn.com/dms/image/v2/D4E03AQEJU75OeQ7Ouw/profile-displayphoto-crop_800_800/B4EZedlaQUHYAU-/0/1750695519968?e=1761782400&v=beta&t=PraLKD0P_3UDulA8Jc5hQQjzFl-U5aIfz-dud217sLA';

export const ABOUT_ME_TEXT = `Sou Marcelo Gomes, editor de vídeo e radialista com mais de 10 anos de experiência no audiovisual. Trabalho atualmente na TV Verdes Mares (afiliada Globo) e na Universidade de Fortaleza (Unifor), atuando em projetos institucionais, educacionais e televisivos.

Ao longo da carreira, desenvolvi especialidade em edição de vídeos profissionais para YouTube, Reels, TikTok, campanhas publicitárias, VSLs e vídeos institucionais, sempre prezando por qualidade, ritmo envolvente e impacto visual.

Atualmente, além da TV e da Unifor, dedico-me ao projeto Edita Aí Studio, onde ofereço serviços de edição de vídeo, pacotes de LUTs e recursos criativos para editores.`;

export const CONTACT_INFO = {
  email: 'contato@marcelogomeseditor.com',
};

export const SKILLS: Pick<Skill, 'name'>[] = [
  { name: 'Edição de Vídeo Profissional' },
  { name: 'Motion Graphics & VFX' },
  { name: 'Color Grading' },
];

const extractIdFromUrl = (url: string): string | null => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const generateViewUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const generateThumbnailUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;


interface VideoData {
    title: string;
    url: string;
}

const verticalVideosData: VideoData[] = [
    { title: 'ACORDEI ATRASADO', url: 'https://drive.google.com/file/d/15hpt8IwiqQq_hHafSe2rSF54zIgQIFrE/view?usp=sharing' },
    { title: 'BOOK TRAILER (HÁ VIDA EM MARTE)', url: 'https://drive.google.com/file/d/1uObwm83VZMpPE1PR3jmhvLkIH_lXgvy2/view?usp=sharing' },
    { title: 'CANTOR WARLEY SOUZA', url: 'https://drive.google.com/file/d/1Cz_9tSdHAbzfYX5guKwE1tBUkmAJWQqi/view?usp=sharing' },
    { title: 'CANTOR WARLEY SOUZA', url: 'https://drive.google.com/file/d/1sXjtRxCoxq1V7KUfBZL3hdJbGHJhwP09/view?usp=sharing' },
    { title: 'COMERCIAL GAROTA BELA JEANS', url: 'https://drive.google.com/file/d/1ygWzfX2mjEB9bR-VTMEtBuY4YAoGgJmJ/view?usp=sharing' },
    { title: 'COMERCIAL SUPER TUBOS', url: 'https://drive.google.com/file/d/1oFg4a24Jyv5pqL-7W-NM7ezbvcHQ8yjm/view?usp=sharing' },
    { title: 'ENTREVISTA DONA MINAS GRILL', url: 'https://drive.google.com/file/d/1NJ_FJUbAOzHIKplGNeSlXYS0_YP7w5sc/view?usp=sharing' },
    { title: 'INSTITUCIONAL JUNDGRAPH', url: 'https://drive.google.com/file/d/1rQPSk6VqUz928diSnY6wvLXAgvr_-5WR/view?usp=sharing' },
    { title: 'LANÇAMENTO E-BOOK REDES SOCIAIS RESTAURANTES', url: 'https://drive.google.com/file/d/1Ejd-bMyPHW3xIjPN8iq--C0jd38ftD-T/view?usp=sharing' },
    { title: 'NATAL OVNI_FINAL 8', url: 'https://drive.google.com/file/d/1OKjZxqqFDq5W0sz0VxBTde8FKK7l_WD9/view?usp=sharing' },
    { title: 'DESAFIO SECA BARRIGA EM 21 DIAS', url: 'https://drive.google.com/file/d/1Vf39lp4aLH0-PCehaTovfZSsZjiNa6SJ/view?usp=sharing' },
    { title: 'REELS (MINAS) SALGADOS ENCOMENDAS (AJUSTE 2)', url: 'https://drive.google.com/file/d/1wWCNSiVEV2-jNs3N-5ADMpn6GfCeaVgS/view?usp=sharing' },
    { title: 'CANTOR THOMAS VITELLI', url: 'https://drive.google.com/file/d/1Q3d3yg8S1D0hh90LMYShbOwO8mUMyjxH/view?usp=sharing' },
    { title: 'CANTOR THOMAS VITELLI', url: 'https://drive.google.com/file/d/1FujF9LQtUqUZoaSSifN54r-Br5wSesyG/view?usp=sharing' },
    { title: 'PUB IRLANDÊS', url: 'https://drive.google.com/file/d/1xOFO0kOV3DEe4hpEe6PDRlBJTg9pgBS7/view?usp=sharing' },
    { title: 'BOOK TRAILER NUA DE ILUSÕES', url: 'https://drive.google.com/file/d/16eA6QdQtG74EC8ZBgILwgqjfMVD6LOcs/view?usp=sharing' },
    { title: 'INSTITUCIONAL SOLLIDA', url: 'https://drive.google.com/file/d/1htJhN3ts6BoyMzUPBtaKlhrxF7NLDYlv/view?usp=sharing' },
    { title: 'INSTITUCIONAL SOLLIDA', url: 'https://drive.google.com/file/d/1ph-oNK-FERrBO9GqoNLitE_jgY8pqh93/view?usp=sharing' },
];

const horizontalVideosData: VideoData[] = [
    { title: 'CH CAMPEONATO CEARENSE', url: 'https://drive.google.com/file/d/1oXKX2OLBoqvSti0KiIO2-BcRQig0djrQ/view?usp=sharing' },
    { title: 'CH DN NOTÍCIAS TARDE/NOITE', url: 'https://drive.google.com/file/d/1IKYZbr-s3Id6FQcppGAiFeS1qpU8h8RT/view?usp=sharing' },
    { title: 'CH INST JOÃO INÁCIO TALK SHOW', url: 'https://drive.google.com/file/d/1tUIPdLezg3INNctQsT1FhXNbrOdLYKaZ/view?usp=sharing' },
    { title: 'DOCUMENTÁRIO NRASILIA GRILL', url: 'https://drive.google.com/file/d/19ihMkdW314g3Z7s7ki5AYCoipB5W0YjE/view?usp=sharing' },
    { title: 'MATÉRIA PROGRAMA É DE CASA (TV GLOBO)', url: 'https://drive.google.com/file/d/1pE4rm5KntFmLTBY8131sPWzLVETsr5vG/view?usp=sharing' },
    { title: 'MERCHAN WOLKSVAGEN', url: 'https://drive.google.com/file/d/1kjevn_rC0ByuCv--FkGZcbh9eErp9rpc/view?usp=sharing' },
    { title: 'TEASER BBB 23 TV VERDES MARES', url: 'https://drive.google.com/file/d/1uzgmUSfwA5RJt5I5Ycfha9CY05OJ6uy9/view?usp=sharing' },
    { title: 'VÍDEO APRESENTAÇÃO CANDIDATO REVSON MOURÃO', url: 'https://drive.google.com/file/d/1fetS9u_vGNACaYstB1G5fajV-ZV3y355/view?usp=sharing' },
    { title: 'VÍDEO ROTARY', url: 'https://drive.google.com/file/d/1ugtLC3UEsb0f3sd8HyzvOjZCZpDBZilZ/view?usp=sharing' },
    { title: 'VSL MINER X', url: 'https://drive.google.com/file/d/1q6FWcHAr0ko44igZu6mLBFzFTYIQPuWt/view?usp=sharing' },
    { title: 'VSL PROTEJA SEU PATRIMÔNIO', url: 'https://drive.google.com/file/d/1-xBYtgEyplcylDvwtEb6gx88paAcyi_g/view?usp=sharing' },
    { title: 'VSL SOLLIDA INVEST', url: 'https://drive.google.com/file/d/1-Zv3QAoYjeuCGCnw17ZhcPTSKq8D8g11/view?usp=sharing' },
    { title: 'VÍDEO PÓS VENDA SÃO JOÃO 2020', url: 'https://drive.google.com/file/d/1G2NQaXuhx3Rba9_XMHQeagUdIhQK-jJk/view?usp=sharing' },
];

const createVideoList = (videosData: VideoData[], startingId: number): Video[] => {
    return videosData.map((video, index) => {
        const id = extractIdFromUrl(video.url);
        if (!id) return null;
        return {
            id: startingId + index,
            title: video.title,
            viewUrl: generateViewUrl(id),
            thumbnailUrl: generateThumbnailUrl(id),
        };
    }).filter((v): v is Video => v !== null);
};

export const VERTICAL_VIDEOS: Video[] = createVideoList(verticalVideosData, 1);
export const HORIZONTAL_VIDEOS: Video[] = createVideoList(horizontalVideosData, verticalVideosData.length + 1);