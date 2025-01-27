import styles from '../styles/Features.module.css';

export default function Features() {
  const features = [
    { icon: '/vacuum-icon.png', label: 'Vacuum Bottles' },
    { icon: '/fridge-icon.png', label: 'Fridge Bottles & Jugs' },
    { icon: '/borosilicate-icon.png', label: 'Borosilicate Bottles' },
    { icon: '/kettle-icon.png', label: 'Kettles' },
  ];

  return (
    <section className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.feature}>
          <img src={feature.icon} alt={feature.label} className={styles.icon} />
          <p className={styles.featureText}>{feature.label}</p>
        </div>
      ))}
    </section>
  );
}
