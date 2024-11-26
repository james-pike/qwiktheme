import { component$ } from '@builder.io/qwik';
import { Tabs } from './Tabs';
import { Card } from './Card';

export default component$(() => {
  return (
    <section>
      <Tabs.Root class="max-w-[400px] font-headline">
        {/* Tab List */}
        <Tabs.List class="grid w-full grid-cols-2">
          <Tabs.Tab class="py-3 text-center bg-bgAccent border-b-2 border-transparent hover:border-primary text-secondary cursor-pointer">
            <div class="text-sm font-medium">Custom Site -</div>
            <div class="text-sm font-semibold">$5000</div>
          </Tabs.Tab>
          <Tabs.Tab class="relative py-3 text-center bg-bgAccent border-b-2 border-transparent hover:border-secondary text-primary cursor-pointer">
            <div class="text-sm font-medium">Monthly -</div>
            <div class="text-sm font-semibold">$250/month</div>
            {/* Ribbon for Popular Option */}
            <div class="absolute top-[-10px] right-[-10px] bg-secondary text-white text-xs px-2 py-1 rounded-full">
              Popular
            </div>
          </Tabs.Tab>
        </Tabs.List>

        {/* Lump Sum Tab Content */}
        <Tabs.Panel class="-mt-0">
          <Card.Root class="bg-bgLight">
            <Card.Header>
              <Card.Title class="text-primary">Complete Project - $5000 + hosting</Card.Title>
              <Card.Description>
                A one-time payment covering all services for your custom website:
                design, development, security, and initial setup.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Custom design and development</li>
                <li>Responsive and accessible layout</li>
                <li>SEO optimization</li>
                <li>Initial hosting setup</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-primary text-white hover:bg-primary-dark">
                Get Started
              </button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Panel>

        {/* Monthly Plan Tab Content */}
        <Tabs.Panel class="-mt-0">
        <Card.Root class="bg-bgLight">
            <Card.Header>
              <Card.Title class="text-primary">Monthly Plan - $250/month</Card.Title>
              <Card.Description>
                A recurring plan that ensures your website is up-to-date and secure:
                hosting, maintenance, and ongoing support.
              </Card.Description>
            </Card.Header>
            <Card.Content class="space-y-2">
              <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Premium hosting services</li>
                <li>Regular updates and backups</li>
                <li>24/7 security monitoring</li>
                <li>Priority customer support</li>
              </ul>
            </Card.Content>
            <Card.Footer>
              <button class="btn w-full p-2 bg-secondary text-white hover:bg-secondary-dark">
                Subscribe Now
              </button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Panel>
      </Tabs.Root>
    </section>
  );
});
