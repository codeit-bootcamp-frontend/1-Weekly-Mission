interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default SocialLink;
