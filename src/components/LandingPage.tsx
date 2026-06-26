"use client";

import styled, { keyframes } from "styled-components";
import { Mail, Phone, MapPin, Link, GitBranch, ArrowRight } from "lucide-react";
import { sections } from "@/data/sections";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const profileImageUrl =
  "https://media.licdn.com/dms/image/v2/D4E03AQGQj3zCSdcgnQ/profile-displayphoto-scale_200_200/B4EZ6PB9rrIkAg-/0/1780516118098?e=2147483647&v=beta&t=9hCGyVcySQcOpCZO05v3Rq86TCfyWYgZToCVF9dndZ0";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  animation: ${fadeUp} 0.45s ease both;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 480px;
  width: 100%;
`;

const AvatarRing = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0a84ff, #bf5af2);
  padding: 4px;
`;

const AvatarInner = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
  object-fit: cover;
`;

const NameBlock = styled.div`
  text-align: center;
`;

const Name = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #f4f4f5;
  margin: 0 0 0.25rem;
  letter-spacing: -0.02em;
`;

const Title = styled.p`
  font-size: 0.9375rem;
  color: #a1a1aa;
  margin: 0;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: #a1a1aa;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    color: #f4f4f5;
  }

  svg {
    flex-shrink: 0;
    color: #71717a;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.125rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(39, 39, 42, 0.6);
  color: #d4d4d8;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(63, 63, 70, 0.7);
    border-color: rgba(255, 255, 255, 0.2);
    color: #f4f4f5;
  }
`;

const Divider2 = styled.div`
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
`;

const Hint = styled.p`
  font-size: 0.8125rem;
  color: #52525b;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin: 0;
`;

const SectionPills = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SectionPill = styled.button<{ $accent: string }>`
  padding: 0.3125rem 0.875rem;
  border-radius: 9999px;
  border: 1px solid ${({ $accent }) => $accent}55;
  background: ${({ $accent }) => $accent}18;
  color: ${({ $accent }) => $accent};
  font-size: 0.8125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${({ $accent }) => $accent}30;
    border-color: ${({ $accent }) => $accent}99;
  }
`;

interface LandingPageProps {
  onOpenSection: (id: string) => void;
}

export function LandingPage({ onOpenSection }: LandingPageProps) {
  return (
    <Root>
      <Card>
        <AvatarRing>
          <AvatarInner src={profileImageUrl} alt="Manjunath Melur Nagaraj" />
        </AvatarRing>

        <NameBlock>
          <Name>Manjunath Melur Nagaraj</Name>
          <Title>Frontend Developer · React.js · TypeScript · Node.js</Title>
        </NameBlock>

        <Divider />

        <ContactList>
          <ContactItem href="mailto:manjunathnmelur@gmail.com">
            <Mail size={15} />
            manjunathnmelur@gmail.com
          </ContactItem>
          <ContactItem href="tel:+447747988414">
            <Phone size={15} />
            +44 7747 988414
          </ContactItem>
          <ContactItem as="span">
            <MapPin size={15} />
            Manchester, UK
          </ContactItem>
        </ContactList>

        <SocialRow>
          <SocialBtn
            href="https://www.linkedin.com/in/manjunath-melur-nagaraj-89396415a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link size={15} />
            LinkedIn
          </SocialBtn>
          <SocialBtn
            href="https://github.com/manjunath-mn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={15} />
            GitHub
          </SocialBtn>
        </SocialRow>

        <Divider2 />

        <Hint>
          <ArrowRight size={13} />
          Open a section from the left
        </Hint>

        <SectionPills>
          {sections.map((s) => (
            <SectionPill
              key={s.id}
              $accent={s.accent}
              onClick={() => onOpenSection(s.id)}
            >
              {s.title}
            </SectionPill>
          ))}
        </SectionPills>
      </Card>
    </Root>
  );
}
