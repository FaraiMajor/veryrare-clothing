import React from "react";
import FormInput from "../form-input/form-input";

import { BaseButton } from '../button/button.styles'
import { SocialIcon } from 'react-social-icons';

import {
    Wrapper,
    FooterPadding,
    FooterLinks,
    FooterSub,
    FooterBelow
} from './footer.styles'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <Wrapper>
                <FooterPadding>
                    <FooterLinks>
                        <FooterSub>
                            <h4>NEWSLETTER SIGN UP</h4>
                            <p>Sign up to our newsletter to receive information
                                regarding exclusive collection previews, special
                                events, and seasonal sale offers.
                            </p>
                            <form>
                                <FormInput
                                    label='email address'
                                    inputOptions={{
                                        type: 'email',
                                        required: true,
                                        name: 'password',
                                    }}
                                />
                            </form>
                            <p>By subscribing the newsletter, you confirm
                                to have read the Privacy Policy and you consent to
                                the processing of your personal data for marketing
                                purposes.</p>
                            <BaseButton>SUBSCRIBE</BaseButton>

                        </FooterSub>
                        <FooterSub>
                            <h4>HELP</h4>
                            <a href="/help">
                                <p>CONTACT US</p>
                            </a>
                            <a href="/help">
                                <p>FAQS</p>
                            </a>
                            <a href="/help">
                                <p>SHIPPING & RETURNS</p>
                            </a>
                            <a href="/help">
                                <p>GUEST RETURNS</p>
                            </a>
                            <a href="/help">
                                <p>PAYMENT METHODS</p>
                            </a>
                            <a href="/help">
                                <p>TRACK YOUR ORDER</p>
                            </a>

                        </FooterSub>
                        <FooterSub>
                            <h4>LEGAL</h4>
                            <a href="/help">
                                <p>TERMS & CONDITIONS</p>
                            </a>
                            <a href="/help">
                                <p>ACCESSIBILITY</p>
                            </a>
                            <a href="/help">
                                <p>PRIVACY POLICY</p>
                            </a>
                            <a href="/help">
                                <p>COOKIE POLICY</p>
                            </a>
                            <a href="/help">
                                <p>COOKIE PREFERENCES</p>
                            </a>
                            <a href="/help">
                                <p>CORPORATE INFORMATION</p>
                            </a>

                        </FooterSub>
                        <FooterSub>
                            <h4>FIND US</h4>
                            <a href="/findus">
                                <span>STORE LOCATOR</span>
                            </a>
                            <h4>FOLLOW VERY RARE</h4>
                            <div className="socials">
                                <SocialIcon className="social_links" url="https://twitter.com/twitter" />
                                <SocialIcon className="social_links" url="https://instagram.com/instagram" />
                                <SocialIcon className="social_links" url="https://facebook.com/facebook" />
                                <SocialIcon className="social_links" url="https://linkedin.com/linkedin" />
                            </div>
                        </FooterSub>
                    </FooterLinks>

                </FooterPadding>
                <FooterBelow>
                    <small>
                        @ {new Date().getFullYear()} Very Rare. All Rights Reserved
                    </small>
                </FooterBelow>


            </Wrapper>
        </>
    );
};

export default Footer;